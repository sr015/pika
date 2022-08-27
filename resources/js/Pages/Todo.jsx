import React, {useState} from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Link, useForm } from "@inertiajs/inertia-react";

export default function Todo(props) {
    const[checks, setChecks] = useState(false);
    const{delete:destory}=useForm();
    const handleDelete =(id)=>{
        destory(route("todo.destroy", id),{
            preserveScroll:true,
        });
    };
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Todoリスト
                </h2>
            }
        >
            <Head title="TodoLIST" />
<div className="p-6 bg-white border-b border-gray-200">

    <table>
        <thead>
            <tr>
                <th>check</th>
                <th>項目</th>
                <th>削除</th>
                <th>更新</th>

            </tr>
        </thead>
        <tbody>
            {props.todos.map((blog) => {
                return (
                    <tr key={blog.id}>
                        <input
                            type="checkbox"
                            value={blog.body}
                            onChange={e=>setChecks(! checks)}/>
                        <td className="border px-4 py-2">
                            {blog.body}
                        </td>
                        <td className="border px-4 py-2">
                        <button className="px-4 py-2 bg-red-500 text-White round-lg text-xs font-semibold" onClick={() =>handleDelete(blog.id)}>削除</button>
                        </td>
                        <td className="border px-4 py-2">
                        <Link href={route("todo.edit",blog.id)}>
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-xs font-semibold">
                            更新
                        </button>
                        </Link>
                         </td>
                    </tr>
                );
            })}
        </tbody>
    </table>    
    <div>
        <Link href={route("todo.create")}>
        <button type="button">追加</button>
        </Link>
    </div>
</div>
        </Authenticated>
    );
}