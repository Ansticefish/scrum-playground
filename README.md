# SCRUM 新手村
## 專案介紹
#### 這是由六角學院主辦的<a href="https://2022.thef2e.com/">The F2E</a>黑客松競賽中的最後一道題目，內容是希望參賽者用具拖拉效果的網站，以遊戲式的方式增加使用者對於Scrum的了解。這次選用的是<a href="https://2022.thef2e.com/users/12061549261454740203">UI設計師EG</a>的作品，並以Drag and Drop API達成拖拉效果。
<br>

<a href="https://ansticefish.github.io/scrum-playground/#/"> *** 點我進入網站！***</a>
<br>
<br>

## 專案技術與環境
使用vue2作為開發的環境，並搭配pug、scss這兩個preprocessor增加開發效率。

## 專案開發重點與設計
### 1. 拖拉效果設計：
使用drag and drop API設定能被拖拉的物件以及放置物件的區域。當事件被觸發時，再利用DataTransfer取得被拖曳物件的資訊，最後利用Javascript去判斷資料與畫面該如何變動。考量到使用的方便性，使用以下邏輯設計拖拉行為：
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

### 2. 內容元件化：
此次UI稿中含有許多重複的元素與樣式，例如角色、對話框、圖表等，為了增加開發的效率與未來修改的便利性，以main.scss統一管理共通的樣式，並將重複的區域做成vue component。

以對話框元件為例，對話框的樣式已全部被統整在component內，未來在使用時，只需要引入dialogue.vue，並透過prop傳入對話框的顏色、說話者、內容、是否顯示pointer以及點擊pointer之後的動作等，就能快速在頁面上修改或新增對話框。

![dialogue demo](/src/assets/forREADME/dialogue-demo.png "對話框範例程式碼") <br><br>
![dialogue UI demo](/src/assets/forREADME/dialogue-ui-demo.png "對話框範例圖") <br><br>

### 3. 使用相對單位排版，製作RWD效果
此次專案的排版主要以寬1440px的桌機為主，並搭配vw、vh、%等相對單位，讓頁面在不同尺寸的螢幕下，仍能正常顯示。

![RWD](/src/assets/forREADME/RWD-demo.gif "拖拉範例2：樣式改變")