import AppData from "@data/app.json";
import Link from "next/link";

import PostsData from "@data/.json/posts";

const MiniSidebar = () => {
    return (
        <>
            <div className="sb-infobar-content">
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Contacto</h4><i className="fas fa-arrow-down"></i>
                </div>
                <ul className="sb-list sb-mb-30">
                    <li><b>Dirección:</b><span>Poder Legislativo # 345 colonia Ley 57</span></li>
                    <li><b>Horario de Tranajo:</b><span>09:00 - 5:00</span></li>
                    <li><b>Telefono:</b><span>+02 (662) 1390238 </span></li>
                    <li><b>Email:</b><span>latorticolishermosillo@gmail.com</span></li>
                </ul>
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Ultimas publicaciones</h4><i className="fas fa-arrow-down"></i>
                </div>
                {PostsData.slice(0, 3).map((item, key) => (
                <Link href={`/blog/${item.id}`} className="sb-blog-card sb-blog-card-sm sb-mb-30" key={`mini-sidebar-posts-item-${key}`}>
                    <div className="sb-cover-frame">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="sb-blog-card-descr">
                        <h5 className="sb-mb-5">{item.title}</h5>
                        <p className="sb-text sb-text-sm">{item.short}</p>
                    </div>
                </Link>
                ))}
            </div>
            <div className="sb-info-bar-footer">
                <ul className="sb-social">
                    {AppData.social.map((item, key) => (
                    <li key={`mini-sidebar-social-item-${key}`}><a href={item.link} target="_blank" title={item.title}><i className={item.icon}></i></a></li>
                    ))}
                </ul>
            </div>
        </>
    );
};
export default MiniSidebar;