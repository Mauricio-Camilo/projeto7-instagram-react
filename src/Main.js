import Sidebar from "./Sidebar";
import Stories from "./Stories";
import Feed from "./Feed";


export default function Main() {
    return (
        <main>
            <div class="barraprincipal">
                <Stories />
                <Feed />
            </div>
            <Sidebar />
        </main>
    )
}