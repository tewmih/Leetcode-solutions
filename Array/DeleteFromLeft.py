
s1=input().strip()
s2=input().strip()

i,j=len(s1)-1,len(s2)-1

while i>=0 and j>=0 and s1[i]==s2[j]:
    i-=1
    j-=1

moves = (i+1)+(j+1)

print(moves)