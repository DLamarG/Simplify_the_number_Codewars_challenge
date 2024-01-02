def simplify(number): 
    result = []
    count = 0
    lst1 = list(str(number))
    length = len(lst1)
    for x in lst1:
        count += 1
        if x and x!='0' and count!=length:
            new_x = x + '*'+'1'+ '0'*(length-count)
            result.append(new_x)
        if x and x!='0' and count==length:
            result.append(x)
    inp_str = '+'.join(result)
    return inp_str

print(simplify(650))
print(simplify(895623))
print(simplify(89))