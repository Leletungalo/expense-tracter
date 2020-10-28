import {useEffect,useState} from "react";
import {projectDatabese} from "../firebase/config"

const UseFirestore = collections => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        projectDatabese.collection(collections)
            .orderBy("createdAt","desc")
            .onSnapshot(snap => {
                const documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(),id: doc.id})
                })
                setDocs(documents)
            })
    },[collections])
    return {docs};
}

export default UseFirestore;