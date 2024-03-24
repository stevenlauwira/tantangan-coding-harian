# // tantangan coding 3/365
# // https://www.codewars.com/kata/586ee462d0982081bf001f07
# // https://github.com/stevenlauwira/tantangan-coding-harian

# def fillable(stock, merch, n):
#     if merch not in stock:
#         return False
#     else:
#         return stock[merch]>=n

def fillable(stock, merch, n):
    return stock.get(merch, 0)>=n