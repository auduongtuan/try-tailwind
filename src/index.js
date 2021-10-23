import './tailwind.css';
function dom(tagName, attrs = {}, ...children) {
    const elem = Object.assign(document.createElement(tagName), attrs)
    for (const child of children) {
        if (Array.isArray(child)) elem.append(...child)
        else elem.append(child)
    }
    return elem
}
const Header = () => <div className="bg-blue-900 hover:bg-red-800 cursor-pointer rounded-sm h-full inline-block p-12 text-white font-bold text-[20px] text-center">Hello world everybody</div>;
const App = () => (
    <div>
        {Header()}
    </div>
)

document.getElementById('app').appendChild(App())