# TGS-WEB-V2

## 相關文件連結

1. <a href="https://docs.google.com/document/d/1ro2rntdKM6PS-fK2SNXcV34fku2IyV8p_1W4kgk7dzA/edit?usp=sharing">[前台 v2.0] 前端技術文件</a>

2. <a href="https://docs.google.com/document/d/1-_dOALs8CqtxVaiuPhRyj6THNugqrdkYreHMjzWAfG4/edit?usp=sharing">[前台 v2.0] PG 產品需求規劃書</a>

3. <a href="https://gitlab.com/inwoker/tgs/tgs-web-v2">Gitlab - tgs-web-v2</a>

## Git flow

### 分支規則

1. 主要分支為 main / stage / dev
2. main: Production 分支
3. stage: 上 Production 前的分支
4. dev: 開發分支
5. 開發新功能: 從 dev 開分支出去 => 開發完後 merge 回 dev
6. 修 bug：從 main / stage 開分支出去 => 開發完後 merge 到 stage 測試 => 測試完畢後推上 main & merge 到 dev

### Commit 規則

1. feat: 新增 features
2. fix: 修補 Bug
3. hotfix: 修補 Production Bug
4. refactor: 重構 / 優化
5. style: 單純修改樣式
6. test: 新增 / 修改測試代碼
7. doc: 更新專案內文件

#### 範例

- feat: 新增 a 功能
- fix: fix a bug
- hotfix: fix prod bug
- refactor: 優化 a 檔案
- style: 修正 header 樣式
- test: 新增 a feature 測試

## Theme 規則

### 新增主題色

1. 在 tailwind.config 中的新增元件顏色，新增方式：以元件方式管理，例如 header, button 等
2. 在 ./src/index.css 中新增對應主題色的色號，為配合 shadcn/ui 的顏色管理，以 hsl 為主，rbb / hex 為輔
3. 需新增所有對應 template 的主題色，例如 .TGS-TEMPLATE-29 / .TGS-TEMPLATE-36
4. 新增完後即可在元件以 tailwind css 的方式使用，例如 className = "text-header-text"，可參考 <LanguageSwitch />, <SystemTime /> 內部寫法

備註：新增完後麻煩將樣式寫在註解 /_ 已設定 _/ 的下方
