from sqlalchemy import Column, Integer, String, DateTime
from database import Base
import datetime

class Alert(Base):
    __tablename__ = "alerts"

    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    alert_type = Column(String, index=True)
    severity = Column(String, index=True)
    details = Column(String)
