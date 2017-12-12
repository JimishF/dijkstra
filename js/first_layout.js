selected = clicked ;
matrix = [ 2d];
G ={}
p = {}
wrow = matrix[ selected ]

direct = getDirectNodes(selected);
      //check for max 
/*

  eachDirect=  {
      index : some index,
      weight : matrix[selected ][ i ]
   }
*/

   G.copy(each)


-----
   current = G.min()
      w = getDirectNodes(current.index)
      
  for each( w as e)
{
   if (e.weight + current.weight < wrow[ e.index ] )
{
  wrow[ e.index ] = e.weight + current. weight ;
G.push (e);
  p.push ()
  // "current" as previous of e
}//if


}//for each connected

repeat ----+
done...
just recursive condition remained in that "repeat----+" line that...
remove G[current] ;
if G.lenghth == 0 ?
   return true...
else call itself again