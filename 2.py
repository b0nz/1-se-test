#!/usr/bin/python3
def rotate(x, y):
    if len(x) <= y:
        return "try again"
    else:
        a=[x]
        b=[]
        for n in range(y):
            x = x[1:]+x[:1] #rotasi array ke kiri
            a.append(x)
            
        for m in range(y+1):
            b.append(a[m][y])
            
        return b

if __name__ == "__main__":
    #inputan x = [1, 2, 3, 4, 5]
    x = [int(i) for i in input().strip().split(" ")]
    #inputan y = 4
    y = int(input())
    print(rotate(list(x), y))
