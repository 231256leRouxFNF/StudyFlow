from sqlalchemy import text
from app.db.session import engine

conn = engine.connect()
try:
    print(conn.execute(text("SELECT 1")).scalar())
finally:
    conn.close()
    