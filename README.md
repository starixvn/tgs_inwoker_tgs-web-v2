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
