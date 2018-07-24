#!/usr/bin/python3
import re

while True:
    try:
        x = int(input("Masukan bilangan integer: "))
    except ValueError:
        print("Cobalagi :)")
        #cek jika inputan bukan berupa integer, akan muncul "cobalagi"
        continue
    else:
        break
regex = re.findall(r"(?<=1).+?(?=1)", format(x, 'b')) #regex + convert to binary
if regex:
    print("GAP = %i"% len(max(regex)))
else:
    print("GAP = %i"% 0)
