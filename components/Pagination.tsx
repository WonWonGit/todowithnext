import {paginationStyle} from "@/styles/paginationStyle";

const Pagination = () => (
    <>
    <div className="page-no">
        <div className="page-no-wrap">
            <a className="page-no-a" href="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.41 17.2375L10.9757 11.5L17.41 5.7625L15.4291 4L7 11.5L15.4291 19L17.41 17.2375Z"
                          fill="#2B2727"></path>
                </svg>
            </a>
            <a className="page-no-a active" href="">
                <span>1</span>
            </a>
            <a className="page-no-a" href="">
                <span>2</span>
            </a>
            <a className="page-no-a" href="">
                <span>3</span>
            </a>
            <a className="page-no-a" href="">
                <span>4</span>
            </a>
            <a className="page-no-a" href="">
                <span>5</span>
            </a>
            <a className="page-no-a" href="">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17.2375L13.4343 11.5L7 5.7625L8.98085 4L17.41 11.5L8.98085 19L7 17.2375Z"
                          fill="#2B2727"></path>
                </svg>
            </a>
        </div>
    </div>
    <style jsx>{paginationStyle}</style>
    </>
)

export default Pagination;