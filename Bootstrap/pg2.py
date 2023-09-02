s="timetopractice "
t="toc"
if len(s)==1 and s==t:
    
    print(s)
    exit (0)
x=s

for i in range(len(s)):
    p=""
    count=0
    flag=0
    
    if s[i] in t:
        for j in range(i,len(s)):
            if s[j] in t and s[j] not in p:
                count+=1
            p=p+s[j]
            
            if count==len(t):
                flag=1
            if flag==1:
                break
        if len(x)>len(p) and flag==1:
            x=p
           
if len(x)>0 and x!=s:
    print(x)
else:
    print("NULL")