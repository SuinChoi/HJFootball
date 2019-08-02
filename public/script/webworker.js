var n = 1;
search: while(true){
	n+=1;
	if(n%3 == 0)
		postMessage(n);
	continue search;
}