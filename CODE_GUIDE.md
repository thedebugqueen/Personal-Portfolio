# 💻 KOD REHBERİ: Portfolyonuzu Özelleştirin

Bu rehber, kod yazmayı hiç bilmeseniz bile sitenizi nasıl değiştireceğinizi gösterir. Her şey hazır, sadece boşlukları doldurmanız yeterli!

---

## 📂 1. İsim ve Unvan Değiştirme
**Dosya:** `index.html`

- **İsim (Büyük Başlık):**
  - **Klavye Kısayolu:** `CTRL + F` tuşuna basın ve `YENİ ADINIZ` diye aratın (veya 76. satıra gidin).
  - `Your Name` yazısını silip kendi adınızı yazın.
  
- **Sayfa Başlığı (Tarayıcı Sekmesi):**
  - Kodun en tepesinde, 9. satırdaki `<title>` etiketini bulun.
  - `Your Name | Creative Portfolio` kısmını kendinize göre değiştirin.

---

## 📝 2. "Hakkımda" Yazısını Değiştirme
**Dosya:** `index.html`

- **118. satıra** gidin.
- `<p>` ile `</p>` arasındaki İngilizce metni silin.
- Kendi hikayenizi, nerede okuduğunuzu ve hedeflerinizi yazın.
> **İpucu:** Yazılarınızın paragraflara bölünmesini isterseniz, her yeni paragraf için yeni bir `<p> Yazı... </p>` bloğu açabilirsiniz.

---

## 🎨 3. Renkleri Değiştirme (Çok Kolay!)
**Dosya:** `style.css`

Sitenin tüm renklerini tek bir yerden yönetiyoruz. 
- Dosyanın en başına (**20-40. satırlar arasına**) bakın.
- `:root` yazan bir kısım göreceksiniz. Burada renk kodları var:

```css
:root {
    --primary: #2563eb;       /* Ana Renk (Mavi) */
    --secondary: #1e40af;     /* İkincil Renk (Koyu Mavi) */
    --accent: #f472b6;        /* Vurgu Rengi (Pembe) */
}
```

- Beğendiğiniz bir rengin **HEX kodunu** (örneğin `#ff5733`) bulun ve buradaki kodla değiştirin. Tüm sitedeki butonlar ve başlıklar otomatik değişecektir!

---

## 🖼️ 4. Fotoğraf Ekleme
**Klasör:** `images`

1. Kendi fotoğrafınızı `images` klasörünün içine atın.
2. Fotoğrafınızın adını `profile.png` yaparsanız, otomatik olarak sitede görünür!
3. Farklı bir isim kullanacaksanız, `index.html` dosyasında **99. satıra** gidin ve `src="images/profile.png"` kısmını kendi dosya adınızla değiştirin.

---

## 🚀 5. Yetenek Ekleme / Çıkarma
**Dosya:** `index.html`

- **132. satıra** gidin (`skill-grid` sınıfını bulun).
- Her yetenek şu şekilde görünür:

```html
<div class="skill-item">
    <i data-lucide="code"></i>
    HTML/CSS
</div>
```

- **Yeni Ekleme:** Bu bloğu kopyalayıp altına yapıştırın ve metni değiştirin.
- **İkon Değiştirme:** `data-lucide="..."` kısmına [Lucide Icons](https://lucide.dev/icons) sitesinden beğendiğiniz bir ikonun adını yazın.

---

## 💼 6. Deneyim (İş/Staj) Ekleme
**Dosya:** `index.html`

- **184. satıra** doğru inin (`timeline` kısmı).
- Her bir deneyim `timeline-item` kutusudur.
- **Yeni Ekleme:** `div class="timeline-item"` ile başlayan ve biten bloğu (yaklaşık 10-15 satır) kopyalayıp altına yapıştırın.
- **Tarih:** `timeline-date` içindeki yılı değiştirin.
- **Başlık:** `h4` etiketinin içini (Şirket/Pozisyon) değiştirin.

---

## 💡 7. Projelerinizi Ekleme
**Dosya:** `index.html`

- **317. satıra** gidin (`project-grid`).
- Her proje bir `glass-card project-card` kutusudur.
- **Resim:** `src="images/project1.png"` kısmına kendi proje resminizi yazın.
- **Link:** `href="#"` kısımlarına projenin Github linkini ekleyin.

---

## 🎓 8. Araştırma/Makale Ekleme (Opsiyonel)
**Dosya:** `index.html`

- Eğer akademik çalışmalarınız varsa **235. satıra** bakın.
- Yoksa, bu bölümü tamamen silebilirsiniz (`<section id="research">` etiketiyle başlar).

---

## 📞 9. İletişim ve Sosyal Medya
**Dosya:** `index.html`

- **390 - 425. satırlar** arası: Email, Konum ve LinkedIn bilgileriniz.
- **460. satır (En Alt):** Footer'daki sosyal medya ikonları. 
- Link eklemek için `href="#"` içindeki `#` işaretini silip kendi profil linkinizi (örn: `https://linkedin.com/in/adiniz`) yapıştırın.

---
*İyi eğlenceler!* ✨
