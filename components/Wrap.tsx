
import {layout} from "@/styles/layout";
import Header from "@/components/Header";
import {reset} from "@/styles/reset";
import {admin} from "@/styles/admin";
import {headerStyle} from "@/styles/headerStyle";

type AppLayoutProps = {
    children: React.ReactNode;
};

const Wrap = ({children}:AppLayoutProps) => (
    <>
        <div className="adm-wrap wrap">
            <Header></Header>
            <div className="sub-container">
                <div className="sub-wrap">
                    <div className="sub-inner">
                        <div className="wrap__adm-cont">
                            <div className="inner__adm-cont">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx global>{reset}</style>
        <style jsx global>{layout}</style>
    </>
)

export default Wrap;