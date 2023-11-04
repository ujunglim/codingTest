-- 코드를 입력하세요
# # LIMIT
# SELECT PRODUCT_ID,PRODUCT_NAME,PRODUCT_CD,CATEGORY,PRICE FROM FOOD_PRODUCT 
# ORDER BY PRICE DESC
# LIMIT 1

# # MAX
# SELECT * FROM FOOD_PRODUCT 
# WHERE PRICE = (SELECT MAX(PRICE) FROM FOOD_PRODUCT)



SELECT PRODUCT_ID,PRODUCT_NAME,PRODUCT_CD,CATEGORY,PRICE FROM FOOD_PRODUCT 
WHERE PRICE = (SELECT MAX(PRICE) FROM FOOD_PRODUCT);