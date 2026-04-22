import re

KEYWORDS = ['motivé', 'passionné', 'expérience', 'projet', 'équipe', 'apprendre', 'innovation']

def calculate_score(data):
    score = 0

    # Email valide (déjà garanti par EmailField, mais double check)
    if re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', data.get('email', '')):
        score += 1

    # Portfolio renseigné
    if data.get('portfolio'):
        score += 1

    # Mots clés dans la motivation
    motivation = data.get('motivation', '').lower()
    if any(kw in motivation for kw in KEYWORDS):
        score += 1

    # Bonus : CV uploadé
    if data.get('cv'):
        score += 1

    return score