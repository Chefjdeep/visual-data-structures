import { motion } from "framer-motion";
import { insert, remove, GenerateRandom } from "./ListADT";

export const ListADT = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }}
    >
      <h5>List - Abstract Data Types</h5>
      <hr />
      <div className="d-flex col-12">
        <div className="col-10">
          <p>
            List ADT represents a collection of elements where the order of
            elements is significant. It supports operations like insertion,
            deletion, and retrieval. Lists can be implemented using arrays or
            linked structures. Common types of lists include arrays, linked
            lists, and doubly linked lists. The choice of list type depends on
            the specific requirements of the application.
          </p>
          <canvas className="bg-black h-55 w-50"></canvas>
          <p id="linked-list-element"></p>
        </div>
        <div
          className="mw-30 col-2"
          style={{ maxWidth: "400px", minWidth: "150px" }}
        >
          <AlgorithmNavigation />
        </div>
      </div>
    </motion.div>
  );
};

import { useEffect, useState } from "react";
import { Tooltip } from "bootstrap";

function AlgorithmNavigation() {
  const [insertValue, setInsertValue] = useState<number | undefined>(undefined);
  const [removeValue, setRemoveValue] = useState<number | undefined>(undefined);
  const [randomValue, setRandomValue] = useState<number | undefined>(undefined);

  // const linkedList = new LinkedList();

  const handleInsertClick = () => {
    if (insertValue !== undefined) {
      insert(insertValue);
      setInsertValue(undefined);
    }
  };

  const handleRemoveClick = () => {
    if (removeValue !== undefined) {
      remove(removeValue);
      setRemoveValue(undefined);
    }
  };

  const handleRandomClick = () => {
    if (randomValue !== undefined) {
      GenerateRandom(randomValue);
      setRandomValue(undefined);
    }
  };

  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  return (
    <div className="gap-2 d-flex flex-column">
      <div className="input-group">
        <button
          type="button"
          className="btn btn-warning border border-dark"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Select the type of list ADT you would like to simulate"
        >
          Storage
        </button>
        <select
          className="border border-black  form-select"
          id="inputGroupSelect01"
        >
          <option value="is">Stack</option>
          <option value="hs">Queue</option>
        </select>
      </div>

      <div className="input-group w-80">
        <button
          type="button"
          className="w-50 btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Enter an integer to be inserted in the list ADT"
          onClick={handleInsertClick}
        >
          Insert
        </button>
        <input
          type="number"
          aria-label="node-1"
          className="w-30 form-control border border-dark"
          value={insertValue || ""}
          onChange={(e) => setInsertValue(Number(e.target.value))}
        />
      </div>

      <div className="input-group w-80">
        <button
          type="button"
          className="w-50 btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Enter an integer to be deleted from the list ADT"
          onClick={handleRemoveClick}
        >
          Remove
        </button>
        <input
          type="number"
          aria-label="node-1"
          className="w-30 form-control border border-dark"
          value={removeValue || ""}
          onChange={(e) => setRemoveValue(Number(e.target.value))}
        />
      </div>

      <div className="input-group w-80">
        <button
          type="button"
          className="w-50 btn btn-primary border border-dark"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Generate a list ADT data structure consisting of given number of elements"
          onClick={handleRandomClick}
        >
          Random
        </button>
        <input
          type="number"
          aria-label="node-1"
          className="w-30 form-control border border-dark"
          value={randomValue || ""}
          onChange={(e) => setRandomValue(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
export default ListADT;
