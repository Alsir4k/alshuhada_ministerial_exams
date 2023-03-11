<!DOCTYPE html>
<html lang="ar">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/mian.css" />
    <link rel="stylesheet" href="./css/form-section.css" />
    <link rel="icon" href="./imgs/MOELogo.svg.png" />
    <title>الاختبارات الوزارية</title>
    <script
      src="https://kit.fontawesome.com/66c26e66fa.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <section id="form-section">
      <div class="form-box">
        <div class="logos">
          <img src="./imgs/SchoolLogo.png" alt="" />
          <img src="./imgs/MOELogo.svg.png" alt="" />
        </div>
        <form action="./results.php" method="POST">
          <div id="log-in-field">
            <h1>الاختبارات الوزارية</h1>
            <h3>الاختبارات المعيارية واختبار مهاراتي</h3>
            <div class="input-field">
              <i class="fa-solid fa-id-card"></i>
              <input id="id-input" type="text" name="id" placeholder="أدخل رقم هوية الطالب" required pattern="\d*" maxlength="10" title="يجب أن يكون رقم الهوية من 10 أرقام فقط" />
            </div>
            <div class="input-field">
            <i class="fa-solid fa-key"></i>
              <input id="pass-input" type="password" name="pass" placeholder="أدخل كلمة المرور" required />
            </div>
            <div class="btn-field">
              <input id="submit-btn" type="submit" name="submit" value="عرض النتائج"/>
            </div>
          </div>
        </form>
      </div>
    </section>
    <div class="copyright" style="position: absolute; bottom: 3px">
      <p>
        جميع الحقوق محفوظة مدرستي الشهداء الابتدائية ويحيى اليزيدي لتحفيظ القرآن
        الكريم 2023©
      </p>
    </div>
  </body>
</html>
