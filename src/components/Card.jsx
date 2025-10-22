import Button from "./Button";
import "./Styles/Card.css";

export default function Card( {title = "", dashed = false, children, form = false} ) {
	
    if(!!form) {
        return (
            <div className="card-dashed">
            <form id="login-register" method="POST" action="">
                <label htmlFor="email">Email</label> <br />
                <input type="text" name="email" required/> <br />
                <label htmlFor="password">Password</label> <br />
                <input type="password" name="password" required/>
                <br />
                <Button></Button>
                <Button></Button>
            </form>
            </div>
        );
    } else {
        return (
        <section className= "card">
            {!!title && <div className="card-title">{title}</div>}
            <div className="card-content">{children}</div>
        </section>
    );
    }
}
