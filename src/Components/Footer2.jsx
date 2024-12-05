
export default function Footer2(){
    return(
        <>
          <footer className="footer bg-neutral-950 text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center p-10 ml-10">

                    <p> © {new Date().getFullYear()} -Hetal's Home Kitchen</p>
                </aside>
            </footer>
        </>
    );
}