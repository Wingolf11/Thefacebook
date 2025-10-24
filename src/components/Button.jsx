import "../styles/Button.css";

export default function Button({title = ""}) {
	return <button type="submit" className="btn">{title}</button>;
}
