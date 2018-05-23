<template>

    <div class="google-timeline">

        <div class="sub-header">Timeline</div>

        <div id="timeline" class="timeline"></div>

    </div>


</template>

<script>

    export default {

        data: function() {
            return {
            }
        },

        computed: {

        },

        mounted() {
            this.createGoogleCharts()
                .then( () => {
                    this.initGoogleCharts();
                });
        },

        methods: {

			createGoogleCharts: function() {
				return new Promise((resolve, reject) => {
					let gchart = document.createElement('script');
					gchart.src = 'https://www.gstatic.com/charts/loader.js';
					gchart.type = 'text/javascript';
					gchart.onload = resolve;
					gchart.onerror = reject;
					document.body.appendChild(gchart);
				});
			},


			initGoogleCharts: function() {
				google.charts.load('current', {'packages':['timeline']});
                google.charts.setOnLoadCallback( () => {
					this.drawTimeline();
				});
			},
			
            drawTimeline: function() {
            
                var container = document.getElementById('timeline');
                var chart = new google.visualization.Timeline(container);
                var dataTable = new google.visualization.DataTable();

                dataTable.addColumn({ type: 'string', id: 'President' });
                dataTable.addColumn({ type: 'date', id: 'Start' });
                dataTable.addColumn({ type: 'date', id: 'End' });
                dataTable.addRows([
                [ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
                [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
                [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

                chart.draw(dataTable);
            
            }


        }

    }

</script>
