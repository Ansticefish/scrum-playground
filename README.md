# SCRUM 新手村
## 專案介紹
#### 這是由六角學院主辦的<a href="https://2022.thef2e.com/">The F2E</a>黑客松競賽中的最後一道題目，內容是希望參賽者用具拖拉效果的網站，以遊戲式的方式增加使用者對於Scrum的了解。這次選用的是<a href="https://2022.thef2e.com/users/12061549261454740203">UI設計師EG</a>的作品，並以Drag and Drop API達成拖拉效果。
<br>

<a href="https://ansticefish.github.io/scrum-playground/#/"> *** 點我進入網站！***</a>
<br>
<br>

## 專案技術
### 1. Drag and Drop API：
使用drag and drop API設定能被拖拉的物件以及放置物件的區域。當事件被觸發時，再利用DataTransfer取得被拖曳物件的資訊，並利用Javascript去判斷資料與畫面該如何變動。考量到使用的方便性，使用以下邏輯設計拖拉行為：
<br>

<ul>
 <li> 使用者能由外而內將資料拖入作答區，且拖拉方向是雙向的，能將資料拖入作答區，也能從作答區將資料放置回原本位置。

<br>

![drag and drop](/src/assets/forREADME/drag-demo1.gif "拖拉範例1：由外而內")
<br>

  <li> 作答區的樣式會隨著拖入的資料而改變。例如在此頁面中，當點數總和超過20時，框線會變紅色，並阻止使用者前往下一步。

<br>

![drag and drop](/src/assets/forREADME/drag-demo2.gif "拖拉範例2：樣式改變")
<br>

<li> 考量到每個使用者的習慣不同，除了用雙向拖拉來修改資料，也讓使用者以「替換」的方式修改資料。使用者除了能自由在作答區內、外拖拉資料，當拖放至非空白區塊時，新資料會直接取代舊資料，舊資料則會自動回到初始位置，達到修改資料的效果。

<br>

![drag and drop](/src/assets/forREADME/drag-demo3.gif "拖拉範例3：多種修改資料方式")
<br>
