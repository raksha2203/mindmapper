import spacy

nlp = spacy.load("en_core_web_sm")

def extract_mind_map(text):
    doc = nlp(text)
    nodes = set()
    edges = []

    for token in doc:
        if token.dep_ in ("nsubj", "dobj", "pobj", "attr", "ROOT"):
            nodes.add(token.text)
            nodes.add(token.head.text)
            if token.text != token.head.text:
                edges.append({"source": token.head.text, "target": token.text, "label": token.dep_})

    return {
        "nodes": [{"id": node} for node in nodes],
        "edges": edges
    }
