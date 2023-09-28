import { useEffect, useState } from "react";
import Header from "../components/header";


export default function App() {

	const [projects, setProjects] = useState([]);
	const [keyword, setKeyword] = useState("");

	const getProjects = async () => {
		// fetch api to validate this user email exist or not
		const response = await fetch("http://127.0.0.1:5000/skills/" + keyword);
		console.log(response)
		const responseData = await response.json();
		console.log(responseData);
		if (!response.ok) {
			console.log(response);				
		}
		setProjects(responseData)
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
		if (keyword) {
			getProjects();
		}
  };

	useEffect(() => {
		if (projects.length == 0) {
			getProjects();
		}		
	});

  return (
		
		<div className="container mx-auto px-4">
			<Header />
			 <div className="pt-2 relative mx-auto text-gray-600 mb-10">
			 <form className="flex w-full flex-col" onSubmit={handleSubmit}>
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <svg className="text-gray-600 h-4 w-4 fill-current"  version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style={{background:"new 0 0 56.966 56.966;"}}
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
				</form>
      </div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{
					projects.map((d) => (
						<>
						<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<a href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d["Backend"]}</h5>
							</a>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{d["Frontend"]}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{d["Databases"]}</p>
							<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{d["Infrastructre"]}</p>
					</div>
						</>
					)
				)}
			</div>
		</div>
  );
};

