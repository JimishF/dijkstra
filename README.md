# Dijkstra
  I implemented an <a href="http://ieeexplore.ieee.org/document/5569452/" target="_blank">Improved Dijkstra’s Algorithm</a> under my special winter assignment (DEC 2015).

**Usage:**

- Set distance-matrix in ``/js/matrix.js``.
  - Where `inf` means infinity, showing unavailability of direct connection among two nodes
- Run index.html in browser.
  - It will display a un-directional weighted graph according to the distance-matrix.
- Click on any node (number in black circle) in graph.
  - It'll list down *shortest paths to reach selected node*, each from a node in graph.
