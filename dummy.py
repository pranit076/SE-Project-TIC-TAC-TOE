plank = ["_", "_","_",
         "_", "_", "_",
         "_", "_", "_"]
newPlayer = "0"
winner = None
gameRunning = True

def dummyTable(plank):
    print(plank[0] + "|" + plank[1] + "|" + plank[2]+ "|")
    print("____________")
    print(plank[3] + "|" + plank[4] + "|" + plank[5]+ "|")
    print("____________")
    print(plank[6] + "|" + plank[7] + "|" + plank[8]+ "|")
    print("____________")
dummyTable(plank)
