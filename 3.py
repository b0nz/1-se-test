#!/usr/bin/python3
def loncatan(x, y, d):
    i=1
    z=[]
    for n in range(y):
        if x >= y: 
            return 1
            break
        elif x < y:
            a = d * i + x 
            z.insert(n, a) #insert ke list z
            if a >= y:
                print(z)
                return len(z)
                break
            else: #jika a < y
                i += 1 #nilai i ditambah 1
                continue

x, y, d = list(map(int, input().strip().split(' ')))
print(loncatan(x, y, d))
