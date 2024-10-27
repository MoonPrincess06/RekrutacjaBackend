
# Dokumentacja API Koktajli i Składników

To API umożliwia zarządzanie koktajlami oraz ich składnikami. Każdy koktajl może zawierać wiele składników, z określonymi ilościami dla każdego. API wspiera pełne operacje CRUD dla koktajli oraz składników, w tym możliwość przesyłania obrazów dla składników.

## Podstawowy URL
```
http://localhost:3000/api
```

---

## Endpointy

### 1. Koktajle

#### POST /cocktails
- **Opis**: Utwórz nowy koktajl.
- **Treść żądania** (JSON):
  ```json
  {
    "name": "Mojito",
    "category": "Alkoholowy",
    "instructions": "Wymieszaj miętę, limonkę, cukier i rum...",
    "ingredients": [
      { "ingredientId": "1", "quantity": "30ml" },
      { "ingredientId": "2", "quantity": "5 liści" }
    ]
  }
  ```
- **Odpowiedź** (201 Created):
  ```json
  {
    "id": "1",
    "name": "Mojito",
    "category": "Alkoholowy",
    "instructions": "Wymieszaj miętę, limonkę, cukier i rum...",
    "ingredients": [
      { "ingredientId": "1", "quantity": "30ml" },
      { "ingredientId": "2", "quantity": "5 liści" }
    ]
  }
  ```

#### GET /cocktails
- **Opis**: Pobierz wszystkie koktajle.
- **Odpowiedź** (200 OK):
  ```json
  [
    {
      "id": "1",
      "name": "Mojito",
      "category": "Alkoholowy",
      "instructions": "Wymieszaj miętę, limonkę, cukier i rum...",
      "ingredients": [
        { "ingredientId": "1", "quantity": "30ml" },
        { "ingredientId": "2", "quantity": "5 liści" }
      ]
    }
  ]
  ```

#### GET /cocktails/:id
- **Opis**: Pobierz konkretny koktajl na podstawie ID.
- **Odpowiedź** (200 OK):
  ```json
  {
    "id": "1",
    "name": "Mojito",
    "category": "Alkoholowy",
    "instructions": "Wymieszaj miętę, limonkę, cukier i rum...",
    "ingredients": [
      { "ingredientId": "1", "quantity": "30ml" },
      { "ingredientId": "2", "quantity": "5 liści" }
    ]
  }
  ```

#### PUT /cocktails/:id
- **Opis**: Zaktualizuj określony koktajl.
- **Treść żądania** (JSON):
  ```json
  {
    "name": "Zaktualizowane Mojito",
    "category": "Alkoholowy",
    "instructions": "Zaktualizowane instrukcje..."
  }
  ```
- **Odpowiedź** (200 OK):
  ```json
  {
    "id": "1",
    "name": "Zaktualizowane Mojito",
    "category": "Alkoholowy",
    "instructions": "Zaktualizowane instrukcje...",
    "ingredients": [
      { "ingredientId": "1", "quantity": "30ml" },
      { "ingredientId": "2", "quantity": "5 liści" }
    ]
  }
  ```

#### DELETE /cocktails/:id
- **Opis**: Usuń koktajl na podstawie ID.
- **Odpowiedź** (204 No Content)

---

### 2. Składniki

#### POST /ingredients
- **Opis**: Utwórz nowy składnik, w tym przesyłanie obrazu.
- **Żądanie**:
  - **Nagłówki**: `Content-Type: multipart/form-data`
  - **Treść żądania** (Form Data):
    - `name` (string): Nazwa składnika.
    - `description` (string): Opis składnika.
    - `isAlcohol` (boolean): Czy składnik zawiera alkohol.
    - `image` (file): Plik obrazu składnika.
- **Odpowiedź** (201 Created):
  ```json
  {
    "id": "1",
    "name": "Limonka",
    "description": "Owoc cytrusowy",
    "isAlcohol": false,
    "image": "uploads/1698412345678-limonka.png"
  }
  ```

#### GET /ingredients
- **Opis**: Pobierz wszystkie składniki.
- **Odpowiedź** (200 OK):
  ```json
  [
    {
      "id": "1",
      "name": "Limonka",
      "description": "Owoc cytrusowy",
      "isAlcohol": false,
      "image": "uploads/1698412345678-limonka.png"
    }
  ]
  ```

#### GET /ingredients/:id
- **Opis**: Pobierz określony składnik na podstawie ID.
- **Odpowiedź** (200 OK):
  ```json
  {
    "id": "1",
    "name": "Limonka",
    "description": "Owoc cytrusowy",
    "isAlcohol": false,
    "image": "uploads/1698412345678-limonka.png"
  }
  ```

#### PUT /ingredients/:id
- **Opis**: Zaktualizuj składnik, w tym możliwość zmiany obrazu.
- **Żądanie**:
  - **Nagłówki**: `Content-Type: multipart/form-data`
  - **Treść żądania** (Form Data):
    - `name` (opcjonalne): Nowa nazwa.
    - `description` (opcjonalne): Zaktualizowany opis.
    - `isAlcohol` (opcjonalne): Zaktualizowany status alkoholu.
    - `image` (plik, opcjonalne): Nowy plik obrazu.
- **Odpowiedź** (200 OK):
  ```json
  {
    "id": "1",
    "name": "Zaktualizowana Limonka",
    "description": "Zaktualizowany opis",
    "isAlcohol": false,
    "image": "uploads/1698412345678-limonka-updated.png"
  }
  ```

#### DELETE /ingredients/:id
- **Opis**: Usuń składnik na podstawie ID.
- **Odpowiedź** (204 No Content)

---

## Error Responses

- **404 Not Found**: Zwracany, gdy nie znaleziono składnika lub koktajla
  ```json
  {
    "message": "Ingredient not found."
  }
  ```

## Dodatkowe informacje

- **Dostęp do obrazów**: Przesłane obrazy są zapisywane w katalogu `/uploads`. Aby wyświetlić obraz, można użyć następującego formatu URL:
  ```
  http://localhost:3000/uploads/<nazwa_pliku_obrazu>
  ```
