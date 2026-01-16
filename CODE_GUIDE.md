# 💻 KOD REHBERİ: Portfolyonuzu Özelleştirin

Bu rehber, kod yazmayı hiç bilmeseniz bile sitenizi nasıl değiştireceğinizi gösterir. Her şey hazır, sadece boşlukları doldurmanız yeterli!

---

## 🎨 AŞIRI DETAYLI TASARIM REHBERİ

Sitenin **TÜM** renklerini, yazı tiplerini ve efektlerini `style.css` dosyasından yönetiyoruz.

### 1. Renkleri Değiştirme (CSS Değişkenleri)
**Dosya:** `style.css` (Satır 9-33 arası)

Burada `:root` diye bir yer göreceksiniz. Burası sitenin "Beyni" gibidir.

```css
:root {
    /* ANA RENKLER */
    --accent: #ff6b9d;        /* Vurgu Rengi (Pembe) - Butonlar, Linkler */
    --accent-light: #ffb5d0;  /* Açık Vurgu - Arka plan süsleri */
    --accent-dark: #e84393;   /* Koyu Vurgu - Hover efektleri */

    /* GRADYANLAR (Renk Geçişleri) */
    --gradient-1: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
}
```

#### 🛠️ Nasıl Değiştirilir?
1.  **Google'a "Color Picker" yazın** ve beğendiğiniz rengi seçin.
2.  Size `#` ile başlayan bir kod verecek (Örn: `#00ff00`). Buna **HEX Kodu** denir.
3.  `style.css` dosyasında değiştirmek istediğiniz rengin karşısındaki kodu silip kendi HEX kodunuzu yapıştırın.
4.  **Dikkat:** Kodun başındaki `#` işaretini ve sonundaki `;` noktalı virgülü sakın silmeyin!

---

### 2. Yazı Tiplerini (Fontları) Değiştirme
**Dosya:** `index.html` ve `style.css`

#### Adım 1: Yeni Fontu Seçin
1.  **[fonts.google.com](https://fonts.google.com)** adresine gidin.
2.  Beğendiğiniz bir fonta tıklayın.
3.  Sağ üstteki **"Get font"** butonuna basın.
4.  **"Get embed code"** butonuna tıklayın ve `<link href="...">` ile başlayan uzun kodu kopyalayın.

#### Adım 2: Siteye Ekleyin (`index.html`)
1.  `index.html` dosyasını açın.
2.  **17-21. satırlar** arasındaki eski font linklerini silin.
3.  Kopyaladığınız yeni kodu buraya yapıştırın.

#### Adım 3: Siteye Tanıtın (`style.css`)
1.  `style.css` dosyasında **11-12. satıra** gidin.
2.  Tırnak içindeki ismi değiştirin. (Google Fonts sayfasında "CSS class" kısmında yazar).
    *   Örnek: `--font-heading: 'Roboto', sans-serif;`

---

### 3. Yuvarlak Köşeler (Border Radius)
Sitedeki kartlar ve butonlar ne kadar yuvarlak olsun?

- `style.css` içinde `border-radius` kelimesini aratın (`CTRL + F`).
- `24px` veya `50px` gibi değerler göreceksiniz.
- **Daha Keskin:** Değeri küçültün (Örn: `4px`) -> Dikdörtgen olur.
- **Daha Yuvarlak:** Değeri büyütün (Örn: `99px`) -> Hap şeklinde olur.

---

### 4. Cam Efekti (Glassmorphism)
Kartların arkasındaki buzlu cam görüntüsünü değiştirmek için:

- `style.css` içinde `glass-bg` satırını bulun (Satır 26).
- `rgba(255, 255, 255, 0.85)` kısmındaki **0.85** sayısını değiştirin.
    - **1.0 yaparsanız:** Tamamen beyaz olur (arkası görünmez).
    - **0.5 yaparsanız:** Çok şeffaf olur (arkası çok net görünür).

---

## 📂 DİĞER ÖZELLEŞTİRMELER

### Bölüm 1: İsim ve Unvan
**Dosya:** `index.html`
- **76. Satır:** `Your Name` yerine adınızı yazın.
- **9. Satır:** Tarayıcı sekmesinde görünen başlığı değiştirin.

### Bölüm 2: "Hakkımda" Yazısı
**Dosya:** `index.html` (118. Satır)
- `<p>` etiketleri arasındaki İngilizce metni silip kendi hikayenizi yazın.

### Bölüm 3: Fotoğraf
**Klasör:** `images`
- Kendi fotoğrafınızı `profile.png` adıyla bu klasöre kaydederseniz otomatik değişir.

### Bölüm 4: İletişim Bilgileri
**Dosya:** `index.html` (390. Satır civarı)
- `mailto:hello@example.com` -> Mail adresiniz.
- `New York, USA` -> Şehriniz.
- `href="#"` -> LinkedIn profil linkiniz.

### Bölüm 5: Sosyal Medya İkonları
**Dosya:** `index.html` (En alt kısım - Footer)
- İkonların linklerini (`href="..."`) kendi profillerinizle değiştirin.

---
*İyi eğlenceler!* ✨
