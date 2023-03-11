<h2>الاختبارات المعيارية</h2>
      <div class="Standardized-container">
        <div class="scores-container">
          <div class="results scores">
            <h6>الاختبار الثاني</h6>
            <table>
              <tr>
                <td>العلوم</td>
                <td>الرياضيات</td>
              </tr>
              <tr>
                <td><?php print_r($row['science_t2']) ?></td>
                <td><?php print_r($row['math_t2']) ?></td>
              </tr>
            </table>
          </div>
          <div class="results scores">
            <h6>الاختبار الثالث</h6>
            <table>
              <tr>
                <td>العلوم</td>
                <td>الرياضيات</td>
              </tr>
              <tr>
              <td><?php print_r($row['science_t3']) ?></td>
                <td><?php print_r($row['math_t3']) ?></td>
              </tr>
            </table>
          </div>
          <div class="results scores">
            <h6>الاختبار الرابع</h6>
            <table>
              <tr>
                <td>العلوم</td>
                <td>الرياضيات</td>
              </tr>
              <tr>
              <td><?php print_r($row['science_t4']) ?></td>
                <td><?php print_r($row['math_t4']) ?></td>
              </tr>
            </table>
          </div>
          <div class="results scores">
            <h6>الاختبار الخامس</h6>
            <table>
              <tr>
                <td>العلوم</td>
                <td>الرياضيات</td>
              </tr>
              <tr>
              <td><?php print_r($row['science_t5']) ?></td>
                <td><?php print_r($row['math_t5']) ?></td>
              </tr>
            </table>
          </div>
          <div class="results scores">
            <h6>الاختبار السادس</h6>
            <table>
              <tr>
                <td>العلوم</td>
                <td>الرياضيات</td>
              </tr>
              <tr>
              <td><?php print_r($row['science_t6']) ?></td>
                <td><?php print_r($row['math_t6']) ?></td>
              </tr>
            </table>
          </div>
          <div class="results scores">
            <h6>الاختبار السابع</h6>
            <table>
              <tr>
                <td>العلوم</td>
                <td>الرياضيات</td>
              </tr>
              <tr>
              <td><?php print_r($row['science_t7']) ?></td>
                <td><?php print_r($row['math_t7']) ?></td>
              </tr>
            </table>
          </div>
          <div class="results scores">
            <h6>الاختبار التاسع</h6>
            <table>
              <tr>
                <td>العلوم</td>
                <td>الرياضيات</td>
              </tr>
              <tr>
              <td><?php print_r($row['science_t9']) ?></td>
                <td><?php print_r($row['math_t9']) ?></td>
              </tr>
            </table>
          </div>
          <div class="results scores">
            <h6>الاختبار العاشر</h6>
            <table>
              <tr>
                <td>العلوم</td>
                <td>الرياضيات</td>
              </tr>
              <tr>
              <td><?php print_r($row['science_t10']) ?></td>
                <td><?php print_r($row['math_t10']) ?></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="skills-container">
          <div class="results">
            <h6>المهارات المفقودة مادة الرياضيات</h6>
            <div class="exams-selector">
              <span>رقم الاختبار:</span>
              <button id="math2-btn" class="exams-btn selected">2</button>
              <button id="math3-btn" class="exams-btn">3</button>
              <button id="math4-btn" class="exams-btn">4</button>
              <button id="math5-btn" class="exams-btn">5</button>
              <button id="math6-btn" class="exams-btn">6</button>
              <button id="math7-btn" class="exams-btn">7</button>
              <button id="math9-btn" class="exams-btn">9</button>
              <button id="math10-btn" class="exams-btn">10</button>
            </div>
            <div class="skills-field">
              <table id="math2-skills">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['math_s2']) ?></td>
              </tr>
              </table>
              <table id="math3-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['math_s3']) ?></td>
                </tr>
              </table>
              <table id="math4-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['math_s4']) ?></td>
                </tr>
              </table>
              <table id="math5-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['math_s5']) ?></td>
                </tr>
              </table>
              <table id="math6-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['math_s6']) ?></td>
                </tr>
              </table>
              <table id="math7-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['math_s7']) ?></td>
                </tr>
              </table>
              <table id="math9-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['math_s9']) ?></td>
                </tr>
              </table>
              <table id="math10-skills" class="hidden">
                <tr>
                <td><?php print_r($row['math_s10']) ?></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="results">
            <h6>المهارات المفقودة مادة العلوم</h6>
            <div class="exams-selector">
              <span>رقم الاختبار:</span>
              <button id="science2-btn" class="exams-btn selected">2</button>
              <button id="science3-btn" class="exams-btn">3</button>
              <button id="science4-btn" class="exams-btn">4</button>
              <button id="science5-btn" class="exams-btn">5</button>
              <button id="science6-btn" class="exams-btn">6</button>
              <button id="science7-btn" class="exams-btn">7</button>
              <button id="science9-btn" class="exams-btn">9</button>
              <button id="science10-btn" class="exams-btn">10</button>
            </div>
            <div class="skills-field">
              <table id="science2-skills">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['science_s2']) ?></td>
                </tr>
              </table>
              <table id="science3-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['science_s3']) ?></td>
                </tr>
              </table>
              <table id="science4-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['science_s4']) ?></td>
                </tr>
              </table>
              <table id="science5-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['science_s5']) ?></td>
                </tr>
              </table>
              <table id="science6-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['science_s6']) ?></td>
                </tr>
              </table>
              <table id="science7-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['science_s7']) ?></td>
                </tr>
              </table>
              <table id="science9-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['science_s9']) ?></td>
                </tr>
              </table>
              <table id="science10-skills" class="hidden">
                <tr>
                </tr>
                <tr>
                <td><?php print_r($row['science_s10']) ?></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>