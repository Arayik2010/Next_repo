import Layout from '../../components/layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from '@/Store/store';
import styles from '../../components/layout.module.css'
import { IItem, Item } from '@/Types/Common';


export default function SecondPost() {

    const { todo, addTodo,fetchData,newData,deleteData} = useStore();
    console.log(newData);
    const [valueData, setValueData] = useState('')
    const handlerTodo = (elem: string) => {
        addTodo(elem)
    }
    useEffect(() => {
        setValueData('')

    }, [todo])
    return (
        <>
            <Layout>
                <input type="text" value={valueData} onChange={(e) => setValueData(e.target.value)} />
                <button className={styles.button} onClick={() => handlerTodo(valueData)}>add</button>
                {todo.map((item: IItem) => (
                    <div className={styles.itemcontainer} key={item.id}>
                        <p>{item.name}</p>
                        <button onClick={() => deleteData(item)}>x</button>

                    </div>
                ))}
                <button onClick={() => fetchData()}>newDat</button>

                {newData.map((el:Item) => (
                    <div key={el.id}>
                        <p>{el.name}</p>

                    </div>
                ))}

                <Link href='/'>home</Link>
            </Layout>
        </>



    )
}