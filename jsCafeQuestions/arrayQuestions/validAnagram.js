var isAnagram = (s, t) => {
    if(s.length !== t.length){
        return false;
    }

    let mapS = new Map()

    for(let i=0;i<s.length;i++){
        if(mapS.has(s[i])){
            let c = mapS.get(s[i]);
            mapS.set(s[i], c+1)
        }else{
            mapS.set(s[i], 1)
        }
    }

    console.log(mapS)

    for(let j=0;j<t.length;j++){
        console.log(t[j])
        if(!mapS.has(t[j])){
            console.log(1)
            return false;
        }

        mapS.set(t[j], mapS.get(t[j])-1);
        if(mapS.get(t[j])===0){
            console.log(2)
            mapS.delete(t[j])
        }
    }

    if(mapS.size>0){
        console.log("q")
        return false;
    }

    return true;
};

var isAnagram2 = (s, t) => {
    console.log(s.split("").sort())
    console.log(t.split("").sort())
    return s.split("").sort().join()===t.split("").sort().join()
};

console.log(isAnagram2("anagram", "nagaram"))