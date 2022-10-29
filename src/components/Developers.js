import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { developers } from "../data";

export default function Developers() {
    return (
        <section id="developers">
			<div className="container px-5 py-10 mx-auto">
				<div className="text-center mb-20">
					<ChipIcon className="w-10 inline-block mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Developers
					</h1>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Here's the developers who are part of the NaughtyLittleGays group:
					</p>
				</div>                
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {developers.map((developer) => (
                    <div>adsflj</div>
                ))}
            </div>
        </section>
    )
}