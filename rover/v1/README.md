
Move a rover around on a grid

1. You are given an initial starting point (0,0,N) for a rover
2. 0,0 are X,Y coordinates on a grid 10,10
3. N is the direction is facing N,E,S,W
4. L and R allow the rover to rotate left and right
5. M allows the rover to move one point on the current direction
6. the rover receive a string of commands e.g. RMMLM and returns the finishing point e.g. 2:1:N
7. the rover should stop if it reach the grid limits and it will continue the rest of the commands 
8. the grid may have obstacles. If it finds an obstacle:
    - it should stop
    - it should return that there was an obstacle e.g O:2:1:N


|   |   |   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|---|---|
| X | X | X | X | X | X | X | X | X | X |
| X | X | X | X | X | X | X | X | X | X |
| X | X | X | X | X | X | X | X | X | X |
| X | X | X | X | X | X | X | X | X | X |
| X | X | X | X | X | X | X | X | X | X |
| O | X | X | X | X | X | X | X | X | X |
| X | X | X | X | X | X | X | X | X | X |
| X | X | X | X | X | X | X | X | X | X |
| X | X | X | X | X | X | X | X | X | X |
| R | X | X | X | X | X | X | X | X | X |
