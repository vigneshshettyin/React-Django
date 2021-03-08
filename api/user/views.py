from django.shortcuts import render
import string, secrets

# Create your views here.

def generate_session_token(length=10):
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for i in range(length))