import React from "react";
import "./style.scss";
import Link from "next/link";
import icon from "@/public/icon-1.svg";
import chart from "@/public/graph.png";
import arrowGraph from "@/public/arrowGraph.svg";

const page = () => {
  return (
    <div className={"container "}>
      <i className="blur" />
      <header>
        <Link href={""}>Dashboard</Link>
      </header>
      <main>
        <nav>
          <button>
            Dashboard <i>&nbsp;</i>
          </button>
          <button>Usage</button>
          <button>Message</button>
        </nav>
        <section>
          <article>
            <div>
              <img src={icon.src} alt="icon" />
              <div>
                <p>12.345</p>
                <p>Bitcoins</p>
              </div>
            </div>

            <div>
              <img src={icon.src} alt="icon" />
              <div>
                <p>12.345</p>
                <p>Bitcoins</p>
              </div>
            </div>
            <div>
              <img src={icon.src} alt="icon" />
              <div>
                <p>12.345</p>
                <p>Bitcoins</p>
              </div>
            </div>
            <i>...</i>
          </article>
          <article>
            <div>
              <p>Event</p>
              <div>
                <img src={chart.src} alt="chart" />
                <h1>
                  51% <img src={arrowGraph.src} alt="chart" />
                </h1>
              </div>
              <p>Changing the number of all event over time.</p>
            </div>

            <div>
              <p>Event</p>
              <div>
                <img src={chart.src} alt="chart" />
                <h1>
                  51% <img src={arrowGraph.src} alt="chart" />
                </h1>
              </div>
              <p>Changing the number of all event over time.</p>
            </div>

            <div>
              <p>Event</p>
              <div>
                <img src={chart.src} alt="chart" />
                <h1>
                  51% <img src={arrowGraph.src} alt="chart" />
                </h1>
              </div>
              <p>Changing the number of all event over time.</p>
            </div>

            <div>
              <p>Event</p>
              <div>
                <img src={chart.src} alt="chart" />
                <h1>
                  51% <img src={arrowGraph.src} alt="chart" />
                </h1>
              </div>
              <p>Changing the number of all event over time.</p>
            </div>
          </article>
          <article>
            <div>Top Event</div>
            <div>Event</div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default page;
