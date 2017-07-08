#GRID5000 stuff
for host in `cat REMOTEHOST`; do
 remotenodes=`ssh washbair@$host 'cat nodes.txt'`
 for node in $remotenodes; do
  echo $node$'\r'>>nodes.txt
  done
  echo `ssh washbair@$host 'cat static-nodes.json'`>>remotenodes
 done

 localstnode=`cat static-nodes.json`
 rmstnode=`cat remotenodes`
 echo '['$localstnode$','$rmstnode$']'>>static-nodes.json

filename="nodes.txt"
while read -r line
do
    scp "static-nodes.json" root@$line:/home/luxbch/data
done < $filename

for host in `cat $filename`; do
    ssh  root@$host  pkill geth
    ssh  root@$host  Blockchain-Testbed/Blockchain/ethereum/mining.sh 2> /dev/null 2>&1 &
    echo done node $host
done