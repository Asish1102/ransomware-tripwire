from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
import database
import models
from datetime import datetime
from typing import Dict, Any

# Create DB tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Early Ransomware Tripwire C2 API", description="Centralized endpoint for Agent alerts")

class AlertCreate(BaseModel):
    alert_type: str
    severity: str
    details: Dict[str, Any]

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/alerts")
def create_alert(alert: AlertCreate, db: Session = Depends(get_db)):
    db_alert = models.Alert(
        alert_type=alert.alert_type,
        severity=alert.severity,
        details=str(alert.details),
        timestamp=datetime.utcnow()
    )
    db.add(db_alert)
    db.commit()
    db.refresh(db_alert)
    return {"status": "alert_logged", "alert_id": db_alert.id}

@app.get("/alerts")
def get_alerts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.Alert).offset(skip).limit(limit).all()

@app.get("/")
def read_root():
    return {"app": "Early Ransomware Tripwire API", "status": "online"}
