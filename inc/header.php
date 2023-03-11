<div class="header">
        <img src="./imgs/MOELogo.svg.png" alt="" />
        <div class="title">
          <h4>أهلاً، <?php print_r($row['name']) ?> </h4>
          <h6>مدرسة  <?php print_r($row['school']) ?> </h6>
        </div>
        <div class="sign-out">
          <button
            id="sign-out-btn"
            type="button"
            onclick="location.href='./index.php'"
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            خروج
          </button>
        </div>
      </div>