from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "StudyFlow backend is running"}