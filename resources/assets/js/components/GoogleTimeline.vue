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
            
            if (!this.$store.state.googleChartsLoaded) {
                this.createGoogleCharts()
                    .then( () => {
                        this.initGoogleCharts();
                    });
            } else {
                this.drawTimeline();
            }

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
                    this.$store.dispatch('setGoogleChartsLoaded');
				});
			},
			
            drawTimeline: function() {
            
                var container = document.getElementById('timeline');
                var chart = new google.visualization.Timeline(container);
                var dataTable = new google.visualization.DataTable();

                dataTable.addColumn({ type: 'string', id: 'Technology' });
                dataTable.addColumn({ type: 'string', id: 'Name' });
                dataTable.addColumn({ type: 'date', id: 'Start' });
                dataTable.addColumn({ type: 'date', id: 'End' });

                dataTable.addRows([
                    [ '1', 'HTML + CSS', new Date(2001, 5, 1), new Date()],
                    [ '2', 'PHP', new Date(2005, 3, 1),  new Date() ],
                    [ '3', 'Laravel', new Date(2014, 8, 1),  new Date() ],
                ]);

                var options = {
                    colors: ['#0095ff', '#ffa64d', '#fff04d'],
                    timeline: { 
                        showRowLabels: false,
                    },
                    //backgroundColor: '#333333',
                };

                chart.draw(dataTable, options);
            
            }


        }

    }

</script>
