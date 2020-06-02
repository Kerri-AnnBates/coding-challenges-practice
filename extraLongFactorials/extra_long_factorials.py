def extraLongFactorials(n):
    times = 1

    for num in range(n, 1, -1):
        times = num * times

    print(times)
    
extraLongFactorials(30)