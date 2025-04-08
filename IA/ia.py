from transformers import BertTokenizer, BertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForMultipleChoice.from_pretrained('bert-base-uncased')

question = "Lors de cette sensibilisation, on évoque la notion de base de données. De quoi s’agit-il ?"
choices = [
    "Une collection structurée d’informations, organisées afin d’être traitées par des moyens informatiques.",
    "De la portion de stockage en ligne contenant la partie basique des données nécessaires au fonctionnement du site.",
    "Une liste de liens hypertexte organisés de manière à faciliter la navigation sur un site web.",
    "Une bibliothèque numérique contenant les fichiers de médias du site."
]

inputs = tokenizer([[question, choice] for choice in choices], return_tensors="pt", padding=True)
num_choices = len(choices)
inputs = {key: value.unsqueeze(0) for key, value in inputs.items()}  # Ajouter une dimension batch
labels = torch.tensor([0])  # La bonne réponse est le choix 1 (index 0)

outputs = model(**inputs, labels=labels)

loss = outputs.loss
logits = outputs.logits

print(f"Loss: {loss.item()}")
print(f"Logits: {logits}")