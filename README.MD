### README Faylka JavaScript  

---

## **Hordhac**  
Faylkani waa hagaha aasaasiga ah ee JavaScript, waxaana loogu talagalay inuu kaa caawiyo fahamka qaababka asaasiga ah sida shuruudaha, loops, iyo noocyada xogta.

---

## **Qaybaha Mawduuca**  
1. **Isticmaalka `<script>` ee HTML**  
2. **JavaScript Dibadda ah**  
3. **Faallooyinka**  
4. **Kala Duwan (Variables)**  
5. **Noocyada Xogta**  
6. **Go’aan Qaadashada (Conditional Statements)**  
7. **Loops-ka JavaScript**  

---

### **1. Isticmaalka `<script>` ee HTML**  
JavaScript waxaa lagu dari karaa fayl HTML ah adigoo adeegsanaya calaamadda `<script>`.  
Tusaale:  
```html
<script>
    document.write('Hello, Adduun!');
    console.log('Fariin Console-ka ku qoran');
</script>
```

---

### **2. JavaScript Dibadda ah**  
JavaScript waxa kale oo lagu kaydin karaa fayl dibadda ah kadibna lala xiriirin karaa HTML.  
Tusaale:  
```html
<script src="filename.js"></script>
```

---

### **3. Faallooyinka**  
- **Hal-safka ah (Single-line):**  
  ```javascript
  // Tani waa faallo hal saf ah
  ```
- **Faallooyin Badan (Multi-line):**  
  ```javascript
  /*
      Tani waa faallo dhowr saf ah
  */
  ```

---

### **4. Kala Duwan (Variables)**  
- **`var`**: Xudunta guud ee shaqada  
- **`let`**: Xudunta qeybta  
- **`const`**: Qiime lama beddeli karo  

Tusaale:  
```javascript
var fariin = "Hello!";
let magac = "Sihaam";
const da = 21;
```

---

### **5. Noocyada Xogta**  

#### **Noocyada Fudud**  
- **Number (Tiro):**  
  ```javascript
  let tir = 25;
  ```
- **String (Xarfo):**  
  ```javascript
  let magac = "Sihaam";
  ```
- **Boolean (Run/Beena):**  
  ```javascript
  let jecelYahay = true;
  ```
- **Undefined iyo Null:**  
  ```javascript
  let x; // undefined
  let y = null; // null
  ```

#### **Noocyada Aan Fududayn**  
- **Object (Shay):**  
  ```javascript
  const qof = { magac: "Sihaam", da: 21 };
  ```
- **Array (Liis):**  
  ```javascript
  let koorsooyin = ["HTML", "CSS", "JavaScript"];
  ```

---

### **6. Go’aan Qaadashada (Conditional Statements)**  
- **If Statement:**  
  ```javascript
  if (shuruud) {
      console.log('Shuruudda waa sax');
  }
  ```
- **Else If Statement:**  
  ```javascript
  if (shuruud1) {
      console.log('Shuruud1 waa sax');
  } else if (shuruud2) {
      console.log('Shuruud2 waa sax');
  } else {
      console.log('Dhammaan waa qalad');
  }
  ```
- **Switch Statement:**  
  ```javascript
  switch (qiime) {
      case 1:
          console.log('Qiyaasta waa 1');
          break;
      default:
          console.log('Ma jiro isbarbardhig ku habboon');
  }
  ```

---

### **7. Loops-ka JavaScript**  
- **For Loop:**  
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  ```
- **While Loop:**  
  ```javascript
  let i = 0;
  while (i < 5) {
      console.log(i);
      i++;
  }
  ```
- **Do While Loop:**  
  ```javascript
  let i = 0;
  do {
      console.log(i);
      i++;
  } while (i < 5);
  ```

---

## **Gunaanad**  
Faylkani waa aasaaska JavaScript. Waxaad ku kordhin kartaa markasta oo aad faham ka hesho mowduucyo kale. JavaScript waa luqad awood badan, waxaana muhiim ah inaad si joogto ah wax u barato. 😊