from fastapi import FastAPI

app = FastAPI(title="StudyFlow API")

@app.get("/")
def root():
    return {"message": "StudyFlow backend is running"}