# Redux

透過Redux相關套件建立store，儲存reducer狀態

## Router

使用Router套件建構結帳頁面


### 11/29 修正 CustomButton 無法 onClick

CustomButton為自建元件，雖然jsx內為html中button物件，但仍需要透過母元件 CollectionItem 呼叫時，將 onClick 的方法透過props的方式回給CustomButton，並在CustomButton中透過 {...otherProps} 來接收。


### 11/30 修正reducer中同物件新增時quantity的計算方式

原先使用findIndex找出同商品在陣列的index，並調整物件中的quantity，但不回傳一個新的cartItems，故同商品在次新增時不會觸發state的改變，故無法觸發reselect進一步更新購物車的數字。

### 12/3 使用gh-pages套件deploy